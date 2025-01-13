export default function PostItem({ id, title, body }) {
  return (
    <div style={{ border: "1px solid blue" }}>
      <div>
        <span>No. {id}</span>
        <span>No. {title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
