echo "---------------------------------------------------------------------------"
echo "|                   Deploiement Back-end HeroesApp                        |"
echo "|-------------------------------------------------------------------------|"
echo "| - Variable d'environement :                                             |"
echo "|       mongo-env ==> mongo.ns-heroes.svc.cluster.local                   |"
echo "| - Déploiement de l'application à partir du registry                     |"
echo "|    registry.gitlab.com/cogcoursedevops/kubernetes_heroes_app:server     |"
echo "| - Création d""un service (NodePort) pour le port 5000 vers le 30000     |"
echo "---------------------------------------------------------------------------"
kubectl create -f global-env-mongo.yml
kubectl create -f heroes-deploy.yml
kubectl create -f ServiceHeroes.yml
kubectl get pods -n ns-heroes
kubectl get svc -n ns-heroes