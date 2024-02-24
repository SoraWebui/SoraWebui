import {sql} from "@vercel/postgres";

export const checkAndSaveWork = async (
                                    user_id: string,
                                    input_text: string,
                                    revised_prompt: string,
                                    url: string
                                  ) => {

  const results = await sql`select * from works where user_id=${user_id} and revised_prompt=${revised_prompt};`;
  const works = results.rows;
  if (works.length <= 0) {
    // insert
    await sql`insert into works(user_id, input_text, revised_prompt, url) values(${user_id},${input_text},${revised_prompt},${url});`;
  } else {
    // update
    const work = works[0];
    await sql`update works set updated_at=now() where id=${work.id};`;
  }

}

export const getWorkListByUserId = async (user_id: string) => {
  const results = await sql`select * from works where user_id=${user_id} order by updated_at desc;`;
  const works = results.rows;

  if (works.length > 0) {
    return works;
  }

  return [];
}
