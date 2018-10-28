# Polar 2 Garmin

This project should help you convert `.tcx` files expoerted from [Polar Flow](https://flow.polar.com) trainings to a `.tcx` files ready to be uploaded to [Garmin Connect](https://connect.garmin.com).
It turns out that even though it's the same file type that follows Garmin's `TrainingCenterDatabase` xml schema, Garmin do not like it when you try and upload a file that has an indication it came from someonw who's not Garmin.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License

TBD

## Acknowledgments

* Kudos to [sylr](https://forums.garmin.com/member/742757-sylr) from Garmin forum for publishing how the `.tcx` file should be modified: 
[https://forums.garmin.com/forum/into-sports/garmin-connect/79753-polar-flow-tcx-export-to-garmin-connect](https://forums.garmin.com/forum/into-sports/garmin-connect/79753-polar-flow-tcx-export-to-garmin-connect)