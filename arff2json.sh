#!/bin/sh
# Usage: arff2json.sh < foo.arff > foo.json
# Requires arff: pip install liac-arff
# Why shell instead of python? Probably because I thought the default one-liner was neat:)

# Default format: .data = list of lists
python -c 'import json,sys,arff;json.dump(arff.load(sys.stdin),sys.stdout)'

exit 0
# Or convert data to attribute maps: .data = list of JSON objects/dicts
python -c 'import json,sys,arff
data = arff.load(sys.stdin)
header = [x[0] for x in data["attributes"]]
data["data"] = [dict(zip(header,v)) for v in data["data"]]
json.dump(data, sys.stdout)'
