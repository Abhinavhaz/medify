
import { MenuItem,Select,Button,InputAdornment } from "@mui/material"
import { useEffect,useState } from "react"
import axios from "axios"
import SearchIcon from "@mui/icons-material/Search"
import LocationOnIcon from '@mui/icons-material/LocationOn'; 
import "./Searchpage.css"
import { useNavigate } from "react-router";

function SearchHospital(){


const [state, setState] =useState([])
const [cities, setCities] = useState([])
const [formdata, setFormdata]= useState({state:"",city:""})
const navigate = useNavigate();



const fetchStates=async()=>{
    try {
        const res  =await axios.get( "https://meddata-backend.onrender.com/states")
        setState(res.data)
    } catch (error) {
        console.log("error",error)
    }
}

useEffect(()=>{
    fetchStates()
},[])

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };


const fetchCity=async()=>{
    try {
        const res = await axios.get( `https://meddata-backend.onrender.com/cities/${formdata.state}`)
        setCities(res.data)
    } catch (error) {console.log("error",error)
        
    }
}

  useEffect(()=>{
if(formdata.state){
    fetchCity()
}
  },[formdata.state])

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(formdata.city&& formdata.state){
        navigate(`/search?state=${formdata.state}&city=${formdata.city}`);
    }
  }
return (
    
    
<form style={{display:"flex",justifyContent:"space-between"}} onSubmit={handleSubmit}>
<Select className="state"   displayEmpty name="state" value={formdata.state} onChange={handleChange}  style={{borderRadius:"10px"}}

startAdornment={
          <InputAdornment position="start">
         <LocationOnIcon />
          </InputAdornment>
        }
        >

<MenuItem  disabled value="" >
          State
        </MenuItem>
        {state.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
</Select>

{/* ............................................ */}
<Select   displayEmpty name="city" className="city" style={{borderRadius:"10px"}}
value={formdata.city} onChange={handleChange} startAdornment={
    <InputAdornment position="start">
   <LocationOnIcon />
    </InputAdornment>
  }>



<MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
    
</Select>

<Button type="Submit" variant="contained"  sx={{marginRight:"100px",width:"180px"}}
startIcon={<SearchIcon />}>
    Search
    
</Button>
</form>
    
     
    
)
}
export default SearchHospital