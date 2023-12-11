import { answers } from "../words";
export function createRoomId() {
  let id = new URLSearchParams(window.location.search).get("room");
  if (!id) {
    id = randomId();
    window.location.search = `?room=${id}`;
  }

  return id;
}

function randomId() {
  const answer = answers[Math.floor(Math.random() * answers.length)];
  const b64 = btoa(answer);
  return b64;
}

export function getAnswer() {
  const answer = new URLSearchParams(window.location.search).get("room")!;

  return atob(answer);
}
