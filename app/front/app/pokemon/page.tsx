"use client";

import SinglePokemon from "@/components/Pokemon/SinglePokemon";
import Search from "@/components/Pokemon/Search";
import Navigation from "@/components/Pokemon/Navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useSearchParams } from 'next/navigation';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Suspense } from 'react';

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Pokemon = () => {

  const [pokeInfo, setPokeInfo] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [previosPage, setPreviousPage] = useState()
  
  const searchParams = useSearchParams()

  let offset = searchParams?.get('offset');
  let limit = searchParams?.get('limit');
  let search = searchParams?.get('search');
  let buscar = false;

  let query_params = '';
  if (search) {
    query_params = `?search=${search}`
    buscar = true;
  } else if (limit && offset) {
    query_params = `?limit=${limit}&offset=${offset}`
  }  
  let loading = true
  useEffect(() => {
    const getData = async () => {
      const query = await fetch(`api/pokemon/${query_params}`);
      const response = await query.json();      
      setPokeInfo(response);
      setNextPage(response.next);
      setPreviousPage(response.previous)      
    }
    getData();
    loading = false
  },[]);
  
  return (
    <>
          
      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <Search placeholder="Buscar"/>
          <div className="-mx-4 flex flex-wrap justify-center">
          <Suspense fallback={<Skeleton count={5} />}>
            {
              pokeInfo.results &&
              pokeInfo.results.map( (pokemon) => (   
                <div
                
                  key={uuidv4()}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-1.5"
                >     
                  <SinglePokemon key={uuidv4()} pokemon={pokemon}  />                                  
                </div>
                ))
            }
          </Suspense>
            {
              loading && <Skeleton count={5} />
            }
            {  
              pokeInfo.results &&
              pokeInfo.results.map( (pokemon) => (   
                <div
                
                  key={uuidv4()}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 mt-1.5"
                >     
                  <SinglePokemon key={uuidv4()} pokemon={pokemon}  />                                  
                </div>
                ))
            }            
          </div>
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {
                  pokeInfo.results && 
                  <Navigation prev={previosPage} next={nextPage} />
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
