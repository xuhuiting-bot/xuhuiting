import { formatDistanceToNow } from "date-fns";

const date = "2003-11-09 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
