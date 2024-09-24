echo 'Création du pod avec le server'
kubectl apply -f server.yml
echo 'Création du pod avec le client'
kubectl apply -f client.yml 