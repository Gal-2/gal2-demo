// api/demo.js
export default function handler(req, res) {
  const now = new Date().toISOString();
  res.status(200).json({
    GAL2_demo_time: now,
    note: "Conceptual placeholder demo. Proprietary GAL-2 formula remains confidential."
  });
}
