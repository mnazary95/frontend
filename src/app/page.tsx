export default function Home() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        MUSTFIND IS LIVE
      </h1>
      <p style={{ fontSize: "24px", marginTop: "16px", color: "#a78bfa" }}>
        If you can read this, the deployment works.
      </p>
      <a
        href="/getting-started"
        style={{
          display: "inline-block",
          marginTop: "32px",
          padding: "16px 32px",
          borderRadius: "9999px",
          background: "linear-gradient(to right, #9333ea, #4f46e5)",
          color: "white",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Get Started →
      </a>
    </div>
  );
}
