import React, { useState } from 'react'
import styles from './Section.module.css'
import { Box, CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({title,data,type,filteredData=null,filteredDataValues=[],value, handleToggle, handleChange}) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggleButton = () =>{
        setCarouselToggle(!carouselToggle);
    }
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggleButton}>
                {!carouselToggle ? "Collapse All" : "Show All"}
            </h4>
        </div>
        {type==="song" ? <BasicTabs value={value} handleChange={handleChange}/> : null}
        {data.length === 0 ? (
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <CircularProgress />
            </Box>
        ) : (
            <div className={styles.cardsWrapper}>
                {
                    !carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map(item => (
                                <Card data={item} type={type}/>
                            ))}
                        </div>
                    ) : (
                        <Carousel data={data} renderComponent={(data) => <Card data={data} type={type}/>}/>
                    )
                }
            </div>
        )}
    </div>
  )
}

export default Section