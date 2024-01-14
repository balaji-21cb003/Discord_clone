import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialprofile } from "@/lib/initial-profile";
import { InitialModel } from "@/components/modals/initial-modal";

    

const SetupPage =async () => {
    
    const profile =await initialprofile();

    const server = await db.server.findFirst({
        where: {
            members:{
                some:{
                    profileId:profile.id
                }
            }
        }
    });


    if(server){
        return redirect(`/servers/${server.id}`);
    }
    
    return <InitialModel />;
}
 
export default SetupPage;