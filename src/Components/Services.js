import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktails",
                info: 'lorem is the first value sit amet abacate annuade elit.Mangi, coropris',
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info: 'lorem is the first value sit amet abacate annuade elit.Mangi, coropris',
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info: 'lorem is the first value sit amet abacate annuade elit.Mangi, coropris',
            },
            {
                icon:<FaBeer />,
                title:"Gold Beer",
                info: 'lorem is the first value sit amet abacate annuade elit.Mangi, coropris',
            }
        ]
    }

    render() {
        return (
            <section className="services">
                 <Title title="Services" />
                 <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    } )}
                 </div>
            </section>
        )
    }
}

export default Services

