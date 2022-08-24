
import axios from 'axios';
export interface UserItem {
    id: string,
    avatar: string,
    name: string,
    createAt: string
}
export async function getUsers(): Promise<UserItem[]> {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<UserItem[]>(
        'https://63044ba8761a3bce77e56e56.mockapi.io/user',
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
    return data;
}
type DeleteUserResponse = '';

 export async function deleteUser(id: string) {
 
        // 👇️ const data: UpdateUserResponse
        const { data, status } = await axios.delete<DeleteUserResponse>(
            `https://63044ba8761a3bce77e56e56.mockapi.io/user/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        console.log('response is: ', data);
        // 👇️ response status is: 204
        console.log('response status is: ', status);
        return data;

}


export async function createUser(name:string) {

    // 👇️ const data: CreateUserResponse
    const { data } = await axios.post<UserItem>(
        `https://63044ba8761a3bce77e56e56.mockapi.io/user`,
      { name: name},
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    console.log(JSON.stringify(data, null, 4));
    return data;
}
export async function updateUser(id:string,name:string) {
    // 👇️ const data: UpdateUserResponse
    const { data } = await axios.put<UserItem>(
      `https://63044ba8761a3bce77e56e56.mockapi.io/user/${id}`,
      { name: name },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    );
    console.log(JSON.stringify(data, null, 4));

    return data;
 
}





 
