import React, {useState} from 'react'
import './App.css';
import Style from "./style.module.scss";
import {useParams} from 'react-router-dom';

function ContactUs () {

        const {userName, e_mail} = useParams();
        const [country, setCountry] = useState("");
        const [phone, setPhone] = useState("");

        const countryList = [
            { id: "TR", name: "Turkey" },
            { id: "US", name: "United States of America" },
            { id: "GB", name: "United Kingdom" },
            { id: "DE", name: "Germany" },
            { id: "SE", name: "Sweden" },
            { id: "KE", name: "Kenya" },
            { id: "BR", name: "Brazil" },
            { id: "ZW", name: "Zimbabwe" }
        ];

        function setToCountry(e) {
            setCountry(e);
        }

        function setToPhone(e) {
            setPhone(e)
        }

        function createJson(userName, e_mail, phoneNumber, selectedCountry) {
            let list = [];
            list.push({"name" : userName});
            list.push({"email" : e_mail});
            list.push({"phonenumber" : phoneNumber});
            list.push({"country_code" : selectedCountry});

            console.log(JSON.stringify(list));
            alert("Doldurmuş olduğunuz formun JSON formatına Console'dan ulaşabilirsiniz..");
        }


        return (
            <div>
                <h3>Hey, Contact Us!</h3>

                <form className={Style.contactform}>
                    <input type="text" placeholder="Name" name="name" value={userName.replace("-"," ")} />
                    <input type="email" placeholder="E-Mail" name="e_mail" value={e_mail} />
                    <input type="number" placeholder="Phone Number" name="phone" onChange={(e) => setToPhone(e.target.value)}/>
                    <select placeholder="Select Country" onChange={(e) => setToCountry(e.target.value)}>
                        {countryList.map((country,id) => {
                            return (
                                <option key={id}>{country.name}</option>
                            )
                        })}

                    </select>

                    <input type="button" value='Send' onClick={() => createJson(userName.replace("-"," "), e_mail, phone, country)} />
                </form>
            </div>
        );
    }


export default ContactUs;
