import classes from "./Card1.module.css";

const Card1 = (props) => {
  return (
    <section className={classes['talent-request']}>
      <div className={classes['talent-request_info']}>
        <div className={classes['talent-request_total']}>
          <h2 className={classes['talent-request_title']}>{props.totalEmployees}</h2>
          <p className={classes['talent-request_count']}>{props.pos}</p>
        </div>
        <div className={classes['talent-request_gender']}>
          <p className={classes['talent-request_men']}>{props.men}</p>
          <p className={classes['talent-request_women']}>{props.women}</p>
        </div>
      </div>
      <div className={classes['talent-request_stats']}>
        <div className={classes['talent-request_chart']}>
          <div className={classes['talent-request_chart-container']}>
            <img
              className={classes['talent-request_vector']}
              alt="Growth Chart"
              src={props.vector2}
            />
            <img
              className={classes['talent-request_overlay']}
              alt="Overlay"
              src={props.vector3}
            />
            <span className={classes['talent-request_growth']}>{props.trendLabel}</span>
            <img
              className={classes['talent-request_icon']}
              alt="Frame Icon"
              src={props.frame3}
            />
          </div>
          <div className={classes['talent-request_growth-info']}>
            <span className={classes['talent-request_growth-text']}>{props.pastMonth}</span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Card1;
