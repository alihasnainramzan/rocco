#define MyAppName "Rocco Master Panel"
#define MyAppVersion "1.0.2"
#define MyAppPublisher "Rocco by Raceducater"
#define MyAppURL "https://rocco.ct.ws/"
#define MyBundleId "com.raceducater.rocco"

[Setup]
AppId={{E89F43A1-77BC-4E1B-94C3-14B3E97F104E}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={userappdata}\Adobe\CEP\extensions\{#MyBundleId}
DisableDirPage=yes
DefaultGroupName={#MyAppName}
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
PrivilegesRequiredOverridesAllowed=commandline
OutputDir=E:\rocco\installer_output
OutputBaseFilename=Rocco_MasterPanel_v1.0.2_Setup
SetupIconFile=E:\rocco\rocco_setup.ico
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
CloseApplications=yes
RestartApplications=no
ArchitecturesInstallIn64BitMode=x64compatible
VersionInfoVersion=1.0.2.0
VersionInfoCompany={#MyAppPublisher}
VersionInfoDescription=Rocco Master Panel Setup for Adobe Animate CC
VersionInfoProductName={#MyAppName}
VersionInfoCopyright=Copyright (C) 2026 Raceducater. All rights reserved.

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Messages]
WelcomeLabel1=Welcome to the Rocco Master Panel Setup Wizard
WelcomeLabel2=This will install Rocco Master Panel version 1.0.2 for Adobe Animate on your computer.%n%nFeatures: 33 Pro Animation Tools, Character Rigging, LipSync Engine, Vector Tracer & Asset Marketplace.%n%nIt is recommended that you close Adobe Animate CC before continuing.%n%nClick Next to continue, or Cancel to exit Setup.
FinishedHeadingLabel=Completing the Rocco Master Panel Setup Wizard
FinishedLabel=Rocco Master Panel and studio animation shortcuts have been successfully configured on your system.%n%nYou can now launch Adobe Animate CC and open the panel from:%nWindow -> Extensions -> Rocco by Raceducater.%n%nClick Finish to exit Setup.

[Files]
; Deploy complete extension files to primary bundle: com.raceducater.rocco
Source: "E:\rocco\.staging_extension\*"; DestDir: "{userappdata}\Adobe\CEP\extensions\com.raceducater.rocco"; Flags: ignoreversion recursesubdirs createallsubdirs

; Deploy complete extension files to alias bundle: com.toonyug.masterpanel (Ensures 100% backward compatibility & eliminates missing tool errors)
Source: "E:\rocco\.staging_extension\*"; DestDir: "{userappdata}\Adobe\CEP\extensions\com.toonyug.masterpanel"; Flags: ignoreversion recursesubdirs createallsubdirs

; Deploy host tools to Animate Commands directories if they exist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2026\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2025\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2024\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2023\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2022\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist
Source: "E:\rocco\.staging_extension\host\*"; DestDir: "{localappdata}\Adobe\Animate 2021\en_US\Configuration\Commands"; Flags: ignoreversion recursesubdirs createallsubdirs skipifsourcedoesntexist

[Registry]
; Configure PlayerDebugMode for all Adobe CSXS versions (6 through 25, covering CC 2015 to CC 2026+)
Root: HKCU; Subkey: "Software\Adobe\CSXS.6"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.7"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.8"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.9"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.10"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.11"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.12"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.13"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.14"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.15"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.16"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.17"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.18"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.19"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.20"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.21"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.22"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.23"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.24"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
Root: HKCU; Subkey: "Software\Adobe\CSXS.25"; ValueType: string; ValueName: "PlayerDebugMode"; ValueData: "1"; Flags: createvalueifdoesntexist
