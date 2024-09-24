echo '---------------------------------------------------------'
echo '| Ce script créé les ressources nécessaires pour avoir  |'
echo '| un dashboard dispnible en dehors de notre k8s         |'
echo '---------------------------------------------------------'
echo ' 1) Récupération du dashboard sur github '
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc6/aio/deploy/recommended.yaml 
echo ' 2) Création du compte de service'
kubectl apply -f 1_dashboard-serviceAccount.yml
echo ' 3) Liaison au rôle ClusterBinding'
kubectl apply -f 2_dashboard-clusterRoleBinding.yml
echo ' 4) Affichage du Token pour la connexion dans le navigateur'
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}') 
echo ' 5) Lancement d''un proxy'
echo '-------------------------------------------------------------------------------------------------------------'
echo '|  OUvrez votre navigateur à l''adresse suivante :                                                           |'
echo '|  https://localhost:8443/#/login                                                                            |'
echo '|  et coller le token récupéré ci-dessus dans la page de login                                               |'
echo '-------------------------------------------------------------------------------------------------------------'
kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy 8443:443


