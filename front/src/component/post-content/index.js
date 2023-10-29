import Grid from "../grid";
import "./index.css";

export default function PostContent({ username, date, text }) {
  return (
    <Grid>
      <div className="post-content">
        <span className="post-content__username">@{username}</span>
        <span className="post-content__date">{date}</span>
      </div>

      <p className="post-content__text">{text}</p>
    </Grid>
  );
}