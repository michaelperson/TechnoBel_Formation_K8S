echo '--------------------------------------------------------'
echo '|            Deploiement d''un Pod Mongo               |'
echo '|------------------------------------------------------|'
echo '| - Création d'' un namespace                           |'
echo '| - création d'' un volume et volumeclaim               |'
echo '| - création d'' un déploiement pour un pod Mongo       |'
echo '|   utilisant les volumes précédemment créés           |'
echo '| - Création d''un service (CLUSTERIP) pour le port    |'
echo '|   27017 de MongoDB                                   |'
echo '-------------------------------------------------------|'
kubectl create -f 0_namespace.yml
kubectl config set-context  dev --namespace=ns-heroes --cluster=kind-kind --user=kind-kind
kubectl config use-context dev
kubectl create -f 1_PersitentVolume.yml
kubectl create -f 2_PersistentVolumeClaim.yml
kubectl create -f 3_pod.yml
kubectl create -f 4_Service.yml
kubectl get deploy -n ns-heroes
kubectl get pods -n ns-heroes
kubectl get svc -n ns-heroes
echo '=========================================================='
echo '| INSTALLATION DU CLIENT MONGO POUR IMPORTER Heroes.json |'
echo '=========================================================='
sudo apt install mongodb-clients
mongoimport --uri "mongodb://mongo.ns-heroes.svc.cluster.local:27017/marvelWar" --collection Heroes--drop --file Heroes.json


