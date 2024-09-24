import { Link} from 'react-router-dom';
export default function Menu (props)
{
    return(
                <div className="mainmenu">
                        <div className="navbar navbar-nobg">
                            <div className="navbar-header"><button className="navbar-toggle" type="button"
                                    data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle
                                        navigation</span><span className="icon-bar"></span><span
                                        className="icon-bar"></span><span className="icon-bar"></span></button></div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <Link to="/">Home <div className="ripple-wrapper"></div></Link>
                                    </li>
                                    <li><a href="/heroes">Les supers Héros</a></li>
                                    <li><a href="/teams">Les Teams</a></li>
                                    <li><a href="/contact">Contactez-nous</a></li>
                                    <li><a href="/register">Enregistrez-vous</a></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
    );
}