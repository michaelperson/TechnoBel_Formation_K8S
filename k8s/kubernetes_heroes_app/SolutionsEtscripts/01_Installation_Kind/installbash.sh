curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.10.0/kind-linux-amd64 
chmod +x ./kind 
sudo mv ./kind /usr/local/bin/
echo "Installation réussie"
echo "Version de kind"
kind version
