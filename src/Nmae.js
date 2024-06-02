import React from "react";
export default function Nmae(props){

        var datas=props.datas;
 
  
    

return(
    <div>
       NAME:<br></br>{datas.firstname} {datas.middlename} {datas.lastname}<br></br><br></br>
                    COURSE:<br></br>{datas.choose}<br></br><br></br>
                    GENDER:<br></br>{datas.gender}<br></br><br></br>
                    PHONE NO:<br></br>+91 {datas.phone}<br></br><br></br>
                    ADDRESS:<br></br>{datas.address}<br></br><br></br>
                    MAIL:<br></br>{datas.mail}<br></br><br></br>
    </div>
)
}