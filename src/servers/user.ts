import {sql} from "@vercel/postgres";
import { v4 as uuidv4 } from 'uuid';

export const checkAndSaveUser = async (name:string, email:string, image:string) => {
  const results = await sql`select * from user_info where email=${email};`;
  const users = results.rows;
  if (users.length <= 0) {
    const result = {
      user_id: '',
      name: '',
      email: '',
      image: '',
    }
    // 新增
    try {
      const strUUID = uuidv4();
      await sql`insert into user_info(user_id,name,email,image) values(${strUUID},${name},${email},${image});`;
      result.user_id = strUUID;
      result.name = name;
      result.email = email;
      result.image = image;
      return result;
    } catch (e) {
      console.log(e)
      return result;
    }
  } else {
    // 更新
    const user = users[0];
    await sql`update user_info set name=${name},image=${image} where id=${user.id};`;
    return user;
  }
}
