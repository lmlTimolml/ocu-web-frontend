export default function handler(req, res) {
  // Get data submitted in request's body.
  if (req.method === POST) {
    const {
      fname,
      lname,
      phone,
      email,
	  company,
      acceptterms,
      acceptmobile,
      acceptemail,
    } = req.body;

    if (
      !fname ||
      !fname.trim() === '' ||
      !lname ||
      !lname.trim() === '' ||
      !phone ||
      !email ||
      !email.includes('@') ||
      !acceptterms.true ||
      !acceptmobile ||
      !acceptemail.true
    ) {
		res.status(422).json({message: "Invalid"});
		return;
	}
      // Store in DB
	  const newMessage = {
		fname,
		lname,
		company,
		phone,
		email,
		acceptterms,
		acceptmobile,
		acceptemail
	  };
	  console.log(newMessage);

	  res.status(201).json({message: "Success", message: newMessage});
  }
}
/*
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.fname || !body.lname || !body.phone || !body.email || !body.acceptterms || !body.acceptmobile || !body.acceptemail) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.fname} ${body.lname} ${body.phone} ${body.email} ${body.acceptterms} ${body.acceptmobile} ${body.acceptemail}` });
}
*/
