echo '--------------------------------------------------------'
echo '|   Creation de 3 nodes :                              |'
echo '|      - kind-control-plane (Ports: 30000,30001,30002) |'
echo '|      - kind-worker                                   |'
echo '|      - kind-worker2                                  |'
echo '|------------------------------------------------------|'
kind create cluster --config kindConfigWithextraPorts.yml
echo '------------------------------------------------------'
echo 'Voici vos nodes :'
echo '------------------------------------------------------'
kubectl get nodes -o wide
