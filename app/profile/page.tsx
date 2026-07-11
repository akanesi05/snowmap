
import { auth } from "@/lib/auth";


export default async function profile() {
  const session = await auth();
  

  return(
<>
  <p>プロフページです</p>
  <p>{session.user.name}</p>
  <p>{session.user.email}</p>
  </>
)

}
