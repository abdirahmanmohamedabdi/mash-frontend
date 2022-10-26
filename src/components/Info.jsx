import '../css/component/featuredInfo.css' 
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"; 
function Info() { 
  return ( 
    <div className="featured"> 
      <div className="featuredItem"> 
        <span className="featuredTitle"> Merchandiser Revenue</span> 
        <div className="featuredMoneyContainer"> 
          <span className="featuredMoney"> $2,415 </span> 
          <span className="featuredMoneyRate"> 
            +11.4 <ArrowUpward className="featuredIcon negative"/> 
          </span> 
        </div> 
        <span className="featuredSub"> Compared to previous month</span> 
      </div> 
      <div className="featuredItem"> 
        <span className="featuredTitle"> Stock</span> 
        <div className="featuredMoneyContainer"> 
          <span className="featuredMoney"> $8,745</span>
          <span className="featuredMoneyRate"> 
            -1.4 <ArrowDownward className="featuredIcon negative"/> 
          </span> 
        </div> 
        <span className="featuredSub"> Compared to previous month</span> 
        </div> 
       
      </div> 
    ); 
} 
export default Info;