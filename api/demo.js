export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const now = new Date().toISOString();
  res.status(200).json({
    GAL2_demo_time: now,
    note: "This demo shows GAL-2's potential. Full implementation details are strictly confidential."
  });
}
