import React, { Fragment,useState, useEffect } from 'react'
import HeroesListItem from './Heroes-list-item';
import {Container , Row , Col} from 'react-bootstrap'
import Axios from 'axios'
import Pagination from '../Pagination/Pagination';
const baseUrl="http://localhost:5000/api/Heroes";

const HeroesList = (props) => {
    const [ApiUrl, setApiUrl] = useState(baseUrl);
    const [heroes, setHeroes] = useState(false); 
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage]=useState(1);
    const [totalPages, setTotalPages]= useState(1);
    const [totalRecords, setTotalRecords]= useState(1);

    useEffect(() => {
        console.log("Get from api");
        Axios.get(ApiUrl+"/"+currentPage)
        .then(({data}) => {
             setTotalRecords(data.data.total);
             setData(data.data.results);
            
        })
        .catch(error => {
            console.log(error);
            setError(true); 
           
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ApiUrl,currentPage]);

    useEffect(() => {
        if(data!==null)
        {
        let Tempheroes = data.map(
            Character => <HeroesListItem key={Character.id} info={Character}></HeroesListItem>
        ); 
        setHeroes(Tempheroes);  
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


    const onPageChanged = function(fdata) {  
        const { currentPage, totalPages, pageLimit } = fdata; 
        setCurrentPage(currentPage);
        setTotalPages(totalPages);  
        
 
      }
   

    if(error) {
        return (
        <li>
            <img src="./images/error.gif" alt="Error"/>             
        </li>)
        
    }


    return(
        <Fragment>
            <Container fluid>
                <Row> 
                    <Col sm={4}>Search</Col> 
                    <Col className="pull-right"><Pagination  key={totalRecords} totalRecords={totalRecords} pageLimit={20} pageNeighbours={1} onPageChanged={onPageChanged} /></Col>    
                </Row>
            </Container>
            <Container fluid>
                <Row> 
                    <Col sm={4}></Col>
                    <Col sm={4}><center>Page {currentPage}/{totalPages}<br/><b>{totalRecords} heroes</b></center></Col>
                    <Col sm={4}></Col>    
                </Row>
            </Container>
            <br/>
            <Container fluid>
                <Row>            
                    {heroes}
                </Row>            
            </Container>
        </Fragment>
        );
   
}

export default HeroesList;