import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../Components/Title'

const getUnique = (items,value) =>  {
    return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    }= context

    //get unique types
    let types = getUnique(rooms,'type')

    //add all
    types = ['all',...types]

    //map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity')
    people = people.map((item,index) => {
        return <option key={index} value={index}>{item}</option>
    })

    // console.log(types);

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/*   start select type   */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type} className="form-control"
                    onChange={handleChange} >
                        {types}
                    </select>
                </div>
                {/*   end select type   */}

                {/*   start guest   */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control"
                    onChange={handleChange} >
                        {people}
                    </select>
                </div>
                {/*   end guest   */}

                {/* start room price */}
                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                    id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end room price */}

                {/* start size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"
                        value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size"
                        value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size */}

                {/* start extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast"
                        checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets"
                        checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* end extras */}

            </form>
        </section>
    )
}

export default RoomsFilter
