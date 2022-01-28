import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
  <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Prestamos</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,500</span>
              <span className="featuredMoneyRate">
                  -140.5<ArrowDownward className="featuredIcon negative"/>
             </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cobranza</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,500</span>
              <span className="featuredMoneyRate">
                  -140.5<ArrowUpward className="featuredIcon"/>
             </span>
          </div>
          <span className="featuredSub">Compare to last month</span>
      </div>
  </div>
  );
}
