#!/bin/bash

echo "Getting meteorites, single id"
echo "================================="
curl http://localhost:3001/v1/meteorites/filter/%7B%20%22id%22:%20379%7D  > single_379_copy.txt
diff single_379_copy.txt single_379_orig.txt
if [ $? -ne 0 ]; then
  echo "Test meteorites, single id failed"
  exit 0
fi

echo "Getting meteorites, by year & mass"
echo "================================="
curl http://localhost:3001/v1/meteorites/filter/%7B%20%22year%22:%201980,%20%22mass%22:1899%20%7D  > year_n_mass_copy.txt
diff year_n_mass_copy.txt year_n_mass_orig.txt
if [ $? -ne 0 ]; then
  echo "Test meteorites year & mass failed"
  exit 0
fi

echo "Check error, invalid json"
echo "================================="
curl http://localhost:3001/v1/meteorites/filter/%7B  > invalid_json_copy.txt
diff invalid_json_copy.txt invalid_json_orig.txt
if [ $? -ne 0 ]; then
  echo "Test on invalid json failed"
  exit 0
fi

echo "Check error, invalid params"
echo "================================="
curl http://localhost:3001/v1/meteorites/filter/%7B%22test%22:%22something%20else%22%7D  > invalid_params_copy.txt
diff invalid_params_copy.txt invalid_params_orig.txt
if [ $? -ne 0 ]; then
  echo "Test on invalid params failed"
  exit 0
fi

echo "Done ..."

exit 0
