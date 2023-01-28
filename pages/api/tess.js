export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			res.status(200).json({ message: "connected" });
			break;
	}
}
