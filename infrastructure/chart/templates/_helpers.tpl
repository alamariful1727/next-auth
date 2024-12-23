{{- /* Labels used by all resources */ -}}
{{- define "micro-services.labels" -}}
helm.sh/chart: {{ $.Chart.Name }}-{{ $.Chart.Version | replace "+" "_" }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/name: {{ .Release.Name }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{ include "micro-services.selector-labels" . }}
version: {{ .Values.version }}
{{- end -}}

{{- /* Labels used for resource selectors */ -}}
{{- define "micro-services.selector-labels" -}}
team: {{ required "A valid value for team is required!" .Values.team | lower }}
app: {{ required "A valid value for product is required!" .Values.product | lower }}
{{- end -}}

{{- /* Cluster host */ -}}
{{- define "host.cluster" -}}
{{ .Values.deployment.clusterPrefix }}{{.Values.clusterDnsSuffix}}{{ .Values.deployment.clusterPostfix }}
{{- end -}}

{{- /* Global host */ -}}
{{- define "host.global" -}}
{{ .Values.deployment.dnsPrefix }}.{{ .Values.deployment.dnsPostfix }}
{{- end -}}

{{- /* Docker image */ -}}
{{- define "docker.image" -}}
{{ .Values.imageRepository }}/{{.Values.team}}/{{ .Values.product }}:{{ .Values.version }}
{{- end -}}