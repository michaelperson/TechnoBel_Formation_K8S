echo 'Création du pod avec 2 containers'
kubectl apply -f 1pod2containers.yml
echo 'Port export pour le front - lancez dans une autre fenêtre wsl le port forward pour l'api'

kubectl -n default port-forward pod/simpleapi-srv 8989:80