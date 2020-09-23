# playing around with NodeJs 
the whole purpose of this server is to provide an aPI to retrieve meteorites from mongo collection + add current (latest) horizontal wind speec on Mars..

## API usage

main entry point:
http://localhost:3001/v1/meteorites/filter/

using filter params (id, year, mass):
http://localhost:3001/v1/meteorites/filter/{ "id":379}
http://localhost:3001/v1/meteorites/filter/{ "year": 1980, "mass":1899 }

## Basics:
get the data from https://data.nasa.gov/resource/y77d-th95.json into a mongodb collection



## testing

will be done via sh file, run it from /tests/

* .env file must contain the following:

NODE_ENV=development
DBURL=<your db url..>
PORT=3001
NASA_API_KEY=<your NASA API key>


get NASA api key from https://api.nasa.gov/



