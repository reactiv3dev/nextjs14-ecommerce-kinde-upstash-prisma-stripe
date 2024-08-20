import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

 

 

export default function Home() {
  return (
    <div>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
      <h1>hello from index page</h1>
    </div>
  );
}
