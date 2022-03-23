import {Link} from "react-router-dom"


const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title:"About",
    link:"/about"

  },
  {
    title:"Products",
    link:"/products",
  }
];
export const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",fontSize:"50px"}}>
{
  links.map((e)=>(
    <Link to={e.link}>{e.title}</Link>
  ))
}
    </div>
  )
    
  
};
