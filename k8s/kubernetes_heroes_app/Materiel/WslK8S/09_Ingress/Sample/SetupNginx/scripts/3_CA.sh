kubectl apply -f ../manifests/2_validating-webhook.yaml

kubectl apply -f ../manifests/3_CA_jobs.yml

#vérifier la completion des jobs
kubectl get jobs -n ingress-nginx


#Inspecter le webhook pour voir le patch Ca Bundle
kubectl describe ValidatingWebhookConfiguration ingress-nginx-admission