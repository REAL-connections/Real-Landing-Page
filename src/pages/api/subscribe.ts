import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default async function subscribe(req: any, res: any) {
  const email = req.body.email;
  console.log("Email: ", email);
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    return res.status(200).send({
      message:
        "Your email has been successfully added to the mailing list. Welcome!",
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
