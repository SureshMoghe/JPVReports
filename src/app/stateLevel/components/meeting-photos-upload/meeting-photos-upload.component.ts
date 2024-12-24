import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FarmerApprovalService } from 'src/app/farmerApprovalModule/services/farmer-approval.service';
import { FarmerRegService } from 'src/app/farmerMpussReg/services/farmer-reg.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
    selector: 'app-meeting-photos-upload',
    templateUrl: './meeting-photos-upload.component.html',
    styleUrls: ['./meeting-photos-upload.component.css']
})
export class MeetingPhotosUploadComponent implements OnInit {
    mandalList = [];
    rbkList = [];
    villageList = [];
    //districtId: any;
    districtList: any[] = [];

    photoUploadDetails = {
        districtId: '',
        mandalId: '',
        rbkId: '',
        villageId: '',
        meetingPhoto: '',
        insertedBy: '',
        source: 'web',
    };

    constructor(
        private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router,
        private utils: UtilsService,
        private logger: LoggerService,
        private session: SessionService,
        private commonAPI: CommonService,
        private apiService: FarmerApprovalService,
        private farmerAPI: FarmerRegService
    ) { }

    ngOnInit(): void {
        debugger;
        if (this.session.uniqueId != "" && this.session.desigId != "") {
          this.loadDistrictList();
        }
        else {
            this.router.navigate(['/shared/UnAuthorized']);
        }
        //this.photoUploadDetails.districtId = this.session.districtId;
        
    }

    loadDistrictList(): void {
        debugger;
        this.spinner.show();
        this.farmerAPI
            .districtList()
            .then((res: any) => {
                if (res.success) {
                    this.districtList = res.result;

                } else {
                    this.toast.info(res.message);
                }
                this.spinner.hide();
            })
            .catch((error: any) => {
                this.spinner.hide();
                this.utils.catchResponse(error);
            });
    }


    async loadMandalList(): Promise<void> {
        try {
            const req = {
                districtId: this.photoUploadDetails.districtId,
            };
            this.spinner.show();
            debugger;
            const response = await this.apiService.mandalListByDistrictIdStateLogin(req);
            this.spinner.hide();
            if (response.success) {
                this.mandalList = response.result;
            } else {
                this.toast.info(response.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async onMandalChange(): Promise<void> {
        try {
            this.rbkList = [];
            this.photoUploadDetails.rbkId = '';
            this.photoUploadDetails.villageId = '';
            if (this.utils.isEmpty(this.photoUploadDetails.mandalId)) {
                return;
            }
            const req = {
                districtId: this.photoUploadDetails.districtId,
                mandalId: this.photoUploadDetails.mandalId,
            };
            this.spinner.show();
            const response = await this.apiService.rbkListByMandalIdStateLogin(req);
            this.spinner.hide();
            if (response.success) {
                this.rbkList = response.result;
            } else {
                this.toast.info(response.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async onRBKChange(): Promise<void> {
        try {
            this.villageList = [];
            this.photoUploadDetails.villageId = '';
            if (this.utils.isEmpty(this.photoUploadDetails.rbkId)) {
                return;
            }
            const req = {
                districtId: this.photoUploadDetails.districtId,
                mandalId: this.photoUploadDetails.mandalId,
                rbkId: this.photoUploadDetails.rbkId,
                uniqueId: '1',
            };
            this.spinner.show();
            const response = await this.apiService.villageListByRbkId(req);
            this.spinner.hide();
            if (response.success) {
                this.villageList = response.result;
            } else {
                this.toast.info(response.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async btnSubmit(): Promise<void> {
        try {
            debugger;
            if (this.utils.isEmpty(this.photoUploadDetails.districtId)) {
                this.toast.warning('Please Select districtId');
                return;
            }
            if (this.utils.isEmpty(this.photoUploadDetails.mandalId)) {
                this.toast.warning('Please Select Mandal');
                return;
            }
            if (this.utils.isEmpty(this.photoUploadDetails.rbkId)) {
                this.toast.warning('Please Select RBK');
                return;
            }
            if (this.utils.isEmpty(this.photoUploadDetails.villageId)) {
                this.toast.warning('Please Select Village');
                return;
            }
            if (this.utils.isEmpty(this.photoUploadDetails.meetingPhoto)) {
                this.toast.warning('Please Upload Photo');
                return;
            }
            this.photoUploadDetails.insertedBy = this.session.userName;
            this.spinner.show();
            const response = await this.apiService.villageMeetingPhotoUpload(
                this.photoUploadDetails
            );
            this.spinner.hide();
            if (response.success) {
                alert(response.message);
                window.location.reload();
            } else {
                this.toast.info(response.message);
            }
        } catch (error) {
            this.spinner.hide();
            this.utils.catchResponse(error);
        }
    }

    async onMeetingPhotoUpload(event): Promise<void> {
        this.utils
            .encodedString(
                event,
                this.utils.fileType.IMAGE,
                this.utils.fileSize.twoHundredKB
            )
            .then((res: any) => {
                this.photoUploadDetails.meetingPhoto = res.replace(
                    'data:image/jpeg;base64,',
                    ''
                );
            })
            .catch((error: any) => {
                this.utils.catchResponse(error);
            });
    }
}