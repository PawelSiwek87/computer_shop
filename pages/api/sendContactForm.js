
export const sendContactForm = async (data) =>

  fetch("/api/contact", {
    //fetch("/api/sendEmail", {
    method: "POST",
    body: JSON.stringify(data),
    //headers: { "Content-Type": "application/json", Accept: "application/json" },
    headers:{ 'Content-Type': 'application/json' }
  }).then((res) => {
    if (!res.ok){
      console.log("Nie udało się wysłać maila"); 
    }  //throw new Error("Nie udało się wysłać maila");
      return res.json();
  });