"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/app/context/TranslationContext";
import FormFields from "../user-components/utils/FormFields";



export default function UnitsDetails({ page, setIsDisabled, isDisabled, ...props }) {
    const { t } = useTranslation();

    const fieldsData = [
        { id: 1, type: 'date', label: 'created_time', idField: 'createdTime', defaultValue: props?.unit?.createdTime },
        { id: 2, type: 'date', label: 'modified_time', idField: 'modifiedTime', defaultValue: props?.unit?.modifiedTime },
        { id: 3, type: 'input', label: 'land_area', idField: 'landArea', defaultValue: props?.unit?.landArea },
        {
            id: 4,
            type: 'select',
            label: 'currency',
            idField: 'currency',
            defaultValue: props?.unit?.currency,
            options: props?.options?.currency,
        },
        { id: 5, type: 'date', label: 'rent_from', idField: 'rentFrom', defaultValue: props?.unit?.rentFrom },
        { id: 6, type: 'date', label: 'rent_to', idField: 'rentTo', defaultValue: props?.unit?.rentTo },

    ];

    return (
        <Card className="menu-drawer w-full h-max bg-Lightbg dark:bg-cardbgDark shadow-box_shadow dark:shadow-none pb-2 pt-2 overflow-x-hidden" dir="rtl">
            <div className="header w-full flex justify-between items-center pb-4">
                <p className="text-xl font-bold">{t("unit_details")}</p>
            </div>
            <CardContent className="w-full overflow-x-auto" dir="rtl">
                <FormFields fields={fieldsData} isDisabled={isDisabled} handleChange={props.handleChange} section={props.section} />
            </CardContent>
        </Card>
    );
}
