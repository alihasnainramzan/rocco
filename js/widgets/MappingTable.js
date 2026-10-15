/**
 * ============================================================================
 * Rocco by Raceducater - MappingTable Widget (MappingTable.js)
 * ============================================================================
 */

(function (global) {
    "use strict";

    function MappingTable(mountElement, events) {
        this.mount = mountElement;
        this.events = events || {};
        this.sourceLayers = [];
        this.targetLayers = [];
        this.mapping = {};
        this.renderEmpty();
    }

    MappingTable.prototype.renderEmpty = function () {
        this.mount.innerHTML = 
            '<div class="mapping-widget">' +
                '<div class="mapping-header">' +
                    '<span class="card-title">Rig Mapping</span>' +
                '</div>' +
                '<div class="empty-notice">' +
                    'Copy source animation to map layers' +
                '</div>' +
            '</div>';
    };

    MappingTable.prototype.updateData = function (sourceLayers, targetLayers) {
        this.sourceLayers = sourceLayers || [];
        this.targetLayers = targetLayers || [];

        var autoMap = global.retargetEngine.createMapping(this.sourceLayers, this.targetLayers);
        
        this.mapping = {};
        for (var src in autoMap) {
            this.mapping[src] = autoMap[src].target;
        }

        this.renderTable(autoMap);
    };

    MappingTable.prototype.renderTable = function (autoMap) {
        var self = this;
        var html = 
            '<div class="mapping-widget">' +
                '<div class="mapping-header">' +
                    '<span class="card-title">Rig Mapping (' + this.sourceLayers.length + ')</span>' +
                    '<button id="btnRefreshTarget" class="btn btn-tiny" title="Sync target layers from stage selection">Sync</button>' +
                '</div>' +
                '<div class="mapping-body">';

        for (var i = 0; i < this.sourceLayers.length; i++) {
            var src = this.sourceLayers[i];
            var mapInfo = autoMap[src] || { target: "", confidence: 0 };
            var selectedTarget = mapInfo.target;

            var confClass = "match-low";
            var confLabel = "Manual";
            if (mapInfo.confidence >= 0.7) {
                confClass = "match-high";
                confLabel = "Auto";
            } else if (mapInfo.confidence >= 0.4) {
                confClass = "match-med";
                confLabel = "Fuzzy";
            }

            html += 
                '<div class="mapping-row">' +
                    '<span class="src-tag" title="' + src + '">' + src + '</span>' +
                    '<span class="arrow-icon">&rarr;</span>' +
                    '<select class="tgt-dropdown" data-source="' + src + '">';

            for (var j = 0; j < this.targetLayers.length; j++) {
                var tgt = this.targetLayers[j];
                var isSelected = (tgt === selectedTarget) ? ' selected="selected"' : '';
                html += '<option value="' + tgt + '"' + isSelected + '>' + tgt + '</option>';
            }

            var isSrcSelected = (this.targetLayers.indexOf(src) === -1 && selectedTarget === src) ? ' selected="selected"' : '';
            html += '<option value="' + src + '"' + isSrcSelected + '>+ ' + src + '</option>';

            html += 
                    '</select>' +
                    '<span class="match-tag ' + confClass + '">' + confLabel + '</span>' +
                '</div>';
        }

        html += '</div></div>';
        this.mount.innerHTML = html;

        var selects = this.mount.querySelectorAll(".tgt-dropdown");
        selects.forEach(function (sel) {
            sel.addEventListener("change", function () {
                var srcKey = this.getAttribute("data-source");
                self.mapping[srcKey] = this.value;
            });
        });

        var btnSync = this.mount.querySelector("#btnRefreshTarget");
        if (btnSync) {
            btnSync.addEventListener("click", function () {
                if (self.events.onSyncTarget) self.events.onSyncTarget();
            });
        }
    };

    MappingTable.prototype.getConfirmedMapping = function () {
        return this.mapping;
    };

    global.MappingTable = MappingTable;

})(window);
