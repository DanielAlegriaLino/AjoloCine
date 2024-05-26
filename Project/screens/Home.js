import React, { useEffect, useState } from "react";
import AppHeader from "../components/Header";
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/global";
import SearchBar from "../components/SearchBar";
import TrendingFilm from "../components/TrendingFilm";
import Constants from 'expo-constants';

export default function Home(){

    const [ratedMovies, setTopMovies] = useState([])
    const [trendingMovies, setTrendingMovies] = useState([])

    const apiKey = Constants.manifest2.extra.TMDB
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDhhYTA4YWZhNmJmZGI1M2FhZGU4MWM0ZjQ5M2VlZSIsInN1YiI6IjY2NTBkMGRjMDExMWFhMDEwZTkwNWMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PrZqaXLfQfIpPfIQfp7zhvftYRf1N9g8IxM7AxHxep4'
        }
    };

    const getTrendingMovies = async () => {
        try{
            const url = "https://api.themoviedb.org/3/trending/movie/day"
            const response = await fetch(url,options)
            const json = await response.json();
            setTrendingMovies(json["results"])
            console.log(json)
        } catch{
        }
    }

    const getTopMovies = async () => {
        try{
            const url = "https://api.themoviedb.org/3/movie/popular"
            const response = await fetch(url,options)
            const json = await response.json()
            console.log(json["results"])
            setTopMovies(json["results"])
        }catch(error){
            console.error("Error fetching top movies: ", error)
        }
    }

    useEffect( ()=>{
        getTopMovies();
        getTrendingMovies();
    }, []);

    return(<View style={globalStyles.body}>
        <AppHeader/>
        <View style={{marginBottom:130}}>
            <SearchBar/>
            <ScrollView>
                <View style={{marginTop:35, height:330}}>
                    <Text style={globalStyles.sectionTitle}>Top Rated</Text>
                    <ScrollView horizontal style={{paddingHorizontal:12}}>
                        {trendingMovies && trendingMovies.map((movie,index)=>{
                            return(<TouchableOpacity key={index} style={{width:225, height:275, marginHorizontal:10 ,borderRadius:25}}>
                                <Image style={{
                                    width:225,
                                    height:275,
                                    borderRadius:25
                                }} source={{uri:`https://image.tmdb.org/t/p/w500${movie["poster_path"]}`}}
                                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                                />
                            </TouchableOpacity>)
                        })}
                    </ScrollView>
                </View>
                <View style={{marginTop:35}}>
                    <Text style={globalStyles.sectionTitle}>Trending Films</Text>
                    {trendingMovies && trendingMovies.map((movie,index)=>(
                        <TrendingFilm title={movie["title"]} avgGrade={movie["vote_average"]} date={movie["release_date"]} source={movie["poster_path"]} key={index}/>
                    ))}
                </View>
            </ScrollView>
        </View>
    </View>)
}