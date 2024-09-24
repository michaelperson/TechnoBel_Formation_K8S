echo 'Port export pour lpour l'api'

kubectl -n default port-forward pod/simpleapi-srv 3000:3000