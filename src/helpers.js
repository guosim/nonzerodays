export function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return "Less than a minute";
}

export function formatTimeAgo(ms) {
  var seconds = Math.floor(ms / 1000);
  if (seconds < 60) {
    return "Complete!";
  }
  if (seconds < 120 && seconds >= 60) {
    return "Completed a minute ago";
  }
  if (seconds < 3600 && seconds >= 120) {
    return "Completed " + Math.floor(seconds/60) + " minutes ago"; 
  }
  if (seconds < 7200 && seconds >= 3600) {
    return "Completed an hour ago";
  }
  if (seconds < 86400 && seconds >= 7200) {
    return "Completed " + Math.floor(seconds/3600) + " hours ago";
  }
  if (seconds < 172800 && seconds >= 86400) {
    return "Completed a day ago";
  }
  if (seconds < 2629746 && seconds >= 172800) {
    return "Completed " + Math.floor(seconds/86400) + " days ago";
  }
  if (seconds < 5259492 && seconds >= 2629746) {
    return "Completed a month ago";
  }
  if (seconds < 31556952 && seconds >= 5259492) {
    return "Completed " + Math.floor(seconds/2629746) + " months ago";
  }
  if (seconds > 31556952) {
    return "Completed over a year ago";
  }

}