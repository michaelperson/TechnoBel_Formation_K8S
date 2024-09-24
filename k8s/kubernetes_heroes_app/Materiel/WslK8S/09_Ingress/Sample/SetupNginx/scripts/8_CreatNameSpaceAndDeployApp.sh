kubectl create namespace dev
kubectl apply -f ../manifests/9_Hello-app.yaml
kubectl get deployments -n dev