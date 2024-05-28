
import { Box, Stack, Typography } from "@mui/material";




function Card({img,title,active=false,bgColor,shadow=false}){

return(
    <Stack
    spacing={2}
    alignItems="center"
    p={3}
    borderRadius={2}
    bgcolor={active ? "rgba(42,167,255,0.08)" : bgColor}
    border={active ? "1px solid #2AA7FF" : "0"}

    >

<Box component="img"  src={img}  height={60} width={60} />
{/* <div  style={{ height: 60, width: 60, backgroundImage: `url(${img})`,backgroundSize: 'contain'  }} /> */}

<Typography  color={active ? '#2AA8FF': "#ABB6C7"} fontSize={19} fontWeight={active ?600 :400}>
{title}
 
</Typography>
    </Stack>

)

}
export default Card