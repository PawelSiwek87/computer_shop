//import { NextApiRequest, NextApiResponse  } from 'next';

//import { sendEmail } from './sendEmail';

/*
export default async (req, res) => {
    //console.log(obj.body);
    //const { name, email } = obj.body;
      //await sendEmail({ name, email });
      //await sendEmail(data);
      

    if(req.method === 'POST') {
      const { name, email } = req.body;
      //await sendEmail({ name, email });
      await sendEmail(null);
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}

*/
/*
export default async function(req, res) {
    return new Promise((resolve, reject) => {
      getData()
        .then(response => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Cache-Control', 'max-age=180000');
          res.end(JSON.stringify(response));
          resolve();
        })
        .catch(error => {
          res.json(error);
          res.status(405).end();
          resolve(); // in case something goes wrong in the catch block (as vijay commented)
        });
    });
  };
  */

  
