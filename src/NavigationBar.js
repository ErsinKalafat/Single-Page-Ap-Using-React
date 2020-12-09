import React from 'react'
import './App.css';
import Style from './style.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBolt} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "",
            modalDurum: false,
            userName:"",
            e_mail:"",
            pass:"",
            sessionDurum: "button",
            list:[]
        };
    }

    handleInput = e => {
        this.setState({
            currentPage: e.target.value
        })
    };

    setModalDurum = (durum) => {
        this.setState({
            modalDurum: durum
        })
    };


    adToList = (name,e_mail,pass,durum) => {
        if (name && e_mail && pass) {
            this.setState({
                sessionDurum: durum,
                modalDurum:false
            });

            this.state.list.push({
                name : name,
                e_mail : e_mail,
                pass : pass
            });

            this.setState({
                list : this.state.list
            })

        } else {
            var validasyonlar = [];
            if (!name)
                validasyonlar.push({hata : "Kullanıcı adı boş bırakılamaz! "});
            if (!e_mail)
                validasyonlar.push({hata : "E-Mail boş bırakılamaz! "});
            if (!pass)
                validasyonlar.push({hata : "Parola boş bırakılamaz! "});

            alert(validasyonlar.map(((val, i)=> (i+1) + " : " + val.hata + "\n")));
        }

    };



    render() {
        return (
            <div className={Style.navigationbar}>
                <div className={Style.logo}>
                    <FontAwesomeIcon icon={faBolt} className={Style.logo}/>
                    {" " + this.state.currentPage}
                </div>

                <div className={Style.butongrubu}>
                    <Link to="/homepage">
                        <button value="Homepage" className={Style.buton} onClick={(e) => this.handleInput(e)}>Homepage</button>
                    </Link>
                    <Link to={"/contactus/" + this.state.userName.replace(" ", "-") + "/" + this.state.e_mail}>
                        <button value="Contact Us" className={Style.buton} onClick={(e) => this.handleInput(e)}>Contact Us!</button>
                    </Link>

                </div>
                <div className={Style.loginbutton}>
                    <input type={this.state.sessionDurum} value="Login" className={Style.loginbutton} onClick={() => this.setModalDurum(true)} />

                    {this.state.list.map((list, key) => {
                         return (
                             <p id={key} className={Style.kullaniciadi}>{list.name}</p>
                         )
                    })}

                    <Modal isOpen={this.state.modalDurum} className={Style.modal}>

                        <h3>Login</h3>

                        <form className={Style.loginform}>
                            <input type="text" placeholder="Name" name="name" onChange={e => this.setState({userName :e.target.value })}/>
                            <input type="text" placeholder="E-Mail" name="e_mail" onChange={e => this.setState({e_mail :e.target.value })}/>
                            <input type="text" placeholder="Password" name="password" onChange={e => this.setState({pass :e.target.value })}/>

                            <input type="button" value='Login' onClick={() => this.adToList(this.state.userName, this.state.e_mail, this.state.pass, "hidden")} />
                        </form>

                        <button className={Style.kapatbutton} onClick={() => this.setModalDurum(false)}>Kapat</button>
                    </Modal>

                </div>

            </div>
        );
    }


}

export default NavigationBar;
